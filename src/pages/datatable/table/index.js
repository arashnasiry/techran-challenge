import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../../../redux/user/actions/userActions'
import Header from './Header'
import Items from './Items'

function DataTable({ state, deleteUser }) {
    const data = state.flag === 'filter' ? state.userFilterd : state.userData
    return (
        <div>
            <table id="customers">
                <Header />
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <Items  {...{ item, deleteUser }} />
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(connect((state) => ({ state: state.user }), { deleteUser })(DataTable))
