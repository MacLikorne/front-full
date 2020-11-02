import { memo } from 'react'
import './modal.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';

export const NiceModal = memo(props => {
    return (
        <Card id='modal' hidden={!props.show}>
            <Button onClick={props.close} id='close-button'>
                <CancelIcon />
            </Button>
            <CardContent>
                {props.show ?
                    <iframe width="560" height="315" title='nice-modal' src="https://ia801602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /> : null}
            </CardContent>
        </Card>
    )
})