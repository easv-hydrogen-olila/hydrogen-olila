import {useState, useRef, useEffect, useCallback} from 'react';
import {Link, flattenConnection} from '@shopify/hydrogen';

import type {Collection, Product} from '@shopify/hydrogen/storefront-api-types'
import ProductGridCard from '../cards/ProductGridCard.client'
import Button from '../elements/Button'

export default function ProductGrid({collection, url}:{collection: Collection, url: string}) {

  const nextButtonRef = useRef(null);
  const initialProducts = collection?.products?.nodes || [];
  const {hasNextPage, endCursor} = collection?.products?.pageInfo ?? {};
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cursor, setCursor] = useState(endCursor ?? '');
  const [nextPage, setNextPage] = useState(hasNextPage);
  const [pending, setPending] = useState(false);
  const haveProducts = initialProducts.length > 0;

  const fetchProducts = useCallback(async () => {
    setPending(true);
    const postUrl = new URL(window.location.origin + url);
    postUrl.searchParams.set('cursor', cursor);
    const response = await fetch(postUrl, {
      method: 'POST',
    });
    const {data} = await response.json();

    // ProductGrid can paginate collection, products and search routes
    // @ts-ignore TODO: Fix types
    const newProducts: Product[] = flattenConnection<Product>(
      data?.collection?.products || data?.products || [],
    );
    const {endCursor, hasNextPage} = data?.collection?.products?.pageInfo ||
      data?.products?.pageInfo || {endCursor: '', hasNextPage: false};

    setProducts([...products, ...newProducts]);
    setCursor(endCursor);
    setNextPage(hasNextPage);
    setPending(false);
  }, [cursor, url, products]);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchProducts();
        }
      });
    },
    [fetchProducts],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '100%',
    });

    const nextButton = nextButtonRef.current;

    if (nextButton) observer.observe(nextButton);

    return () => {
      if (nextButton) observer.unobserve(nextButton);
    };
  }, [nextButtonRef, cursor, handleIntersect]);

  return (
    <div className="bg-clr_grey_bg">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products && (
            products.map((product) => (
              <ProductGridCard key={product.id} product={product} />
            )))}
        </div>
        <div className='flex items-center justify-center mt-6'>
        {nextPage && (
          <div
            className="flex items-center justify-center mt-6"
            ref={nextButtonRef}
          >
            <button
              disabled={pending}
              onClick={fetchProducts}
              className='btn--hero--primary btn--large'
            >
              {pending ? 'Loading...' : 'Load more products'}
            </button>

          </div>
        )}
        </div>
      </div>
    </div>

  )
}
