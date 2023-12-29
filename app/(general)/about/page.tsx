import type {Metadata} from "next"


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
  keywords: ['About Page', 'Fernando', 'informacion']
};

export default function AbautPage () {
  return (
    
        <span className="text-7xl">About Page</span>

  )
}
