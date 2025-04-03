import { Component} from 'react';
import styles from './Admin.module.css';
import AdminComments from './admin-comments/AdminComments';
import request from '../../utils/request';



export default class Admin extends Component {

    

    render(){

        return (
            <>
            <section className={styles['admin-section']}>

                <h1>Admin section</h1>
                <p>This will be code splitted</p>

                <AdminComments />
            </section>
            </>
        );
    }
}


// export default function Admin() {
//     return (
//         <>
//         <h1>Admin section</h1>
//         <p>This will be code splitted</p>
//         </>
//     );
// }