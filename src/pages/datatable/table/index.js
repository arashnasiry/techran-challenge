import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Items from './Items'

function DataTable({ state, deleteUser }) {
    const data = state.userData
    return (
        <div>
            <table id="customers">
                <Header />
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <Items  {...{ item }} />
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(connect((state) => ({ state: state.user }))(DataTable))
