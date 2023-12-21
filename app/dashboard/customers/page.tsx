import {fetchCustomers} from '../../lib/data';
import { customers } from '@/app/lib/placeholder-data';


export default async  function Customers(){
    
    return (
        <main>
<customers />

        </main>
    )
}

export const metadata: Metadata = {
    title: 'customers',
  };