
import React from 'react'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, CardLink } from 'reactstrap'

const GroupCard = () => {

return(
    <div>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBlock>
                <CardTitle className="text-center">Lorem Ipsum</CardTitle>
                <CardSubtitle className="text-left text-muted">Pontevedra</CardSubtitle>
                <CardText className="text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="group/2345">View</CardLink>
                <CardLink href="">Leave</CardLink>
            </CardBlock>
        </Card>
    </div>
)}

export default GroupCard