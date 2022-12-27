import { Layout } from '../index';
import  Section  from '../elements/Section'
import { SearchForm } from '../global/SearchForm.client';


export default function SearchPage({
    searchTerm,
    children
}:{
    searchTerm?: string;
    children: React.ReactNode;
}) {
  return (
    <Layout>
        <Section styles='min-h-screen bg-clr_grey_bg'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center px-4 md:px-8 my-4 uppercase text-xl text-clr_navigation'>
                    <SearchForm searchTerm={searchTerm}/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Section>
    </Layout>
  )
}

