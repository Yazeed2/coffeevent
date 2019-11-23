import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

const Search = () => {
    return (
        <div style={{ width: '70%', marginRight: 'auto', marginLeft: 'auto', display: 'block' }} >
        <form onSubmit={{}}>
            <InputGroup className="mb-3">
                <FormControl placeholder="Search for an Event ..." type="text" name="searchValue"/>
                <InputGroup.Append>
                    <Button variant="outline-primary">Search Now!</Button>
                </InputGroup.Append>
            </InputGroup>
        </form>
        </div >
    )
}

export default Search