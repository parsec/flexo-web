import Button from 'react-bootstrap/Button'
import AttackModal from './AttackModal'

import React from 'react'

function useModal() {
    return(
        <>
            <AttackModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

function AttackButton(props) {
  return (
    <>
        <Button variant="danger" type="button" onClick={props}>Submit Attack</Button>
    </>
  )
}

export default AttackButton