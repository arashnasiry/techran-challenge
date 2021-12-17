import { React, useState } from 'react'
import { connect } from 'react-redux'
import formFiledOptions from '../../../constant/formmodel/formFiledOptions'
import { searchUser, wrokTypeFilter } from '../../../redux/user/actions/userActions'
import './_style.scss'

const { fieldoptions: { workTypeCheckBox: workType } } = formFiledOptions

function SearchBar({ searchUser, wrokTypeFilter }) {
    const [searchKey, setSearchKey] = useState()
    const [filterType, setFilterType] = useState()

    const handleSearch = (event) => {
        setFilterType('')
        setSearchKey(event.target.value.trim())
        searchUser(event.target.value.trim())

    }

    const handleFilter = (event) => {
        setSearchKey('')
        setFilterType(event.target.value)
        wrokTypeFilter(event.target.value)
    }

    return (
        <>
            <div className='search'>
                <input class="searchTerm" type="text" value={searchKey} onChange={handleSearch} placeholder="Search by name or family" />
            </div >
            <div className='search'>
                <select class="searchTerm" id="workType" value={filterType} onChange={handleFilter}>
                    <option value=''>Work Type Filter</option>
                    <option value=''>All</option>
                    {workType.map((oprtion) => (
                        <option key={oprtion.key} value={oprtion.key}>{oprtion.value}</option>
                    ))
                    }
                </select>
            </div>
        </>
    )
}

export default connect(
    null, { searchUser, wrokTypeFilter }
)(SearchBar)
