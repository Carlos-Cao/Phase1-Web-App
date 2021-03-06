import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './MediaCard.css';

interface IMediaCardProps {
    ImageUrl: string | undefined;
    title: string | undefined;
    authors: [] | undefined;
    published: string | undefined;
    publisher: string | undefined;
    Description: string | undefined;

}

function MediaCard(props: IMediaCardProps) {
    return (
        <div>
            <Card className="MediaCardContainer">
                <CardActionArea>
                    <CardMedia className="MediaCardImage" image={props.ImageUrl} />
                    <CardContent>
                        <Typography
                            variant="body1"
                            color="primary"
                            component="p"
                            className="MediaCardTitle"
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="secondary"
                            component="p"
                            className="MediaCardTitle"
                        >
                            By {props.authors}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            component="p"
                            className="MediaCardTitle"
                        >
                            Date published: {props.published}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            component="p"
                            className="MediaCardTitle"
                        >
                            Published by: {props.publisher}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className="MediaCardDescription"
                        >
                            {props.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div >
    );
}

export default MediaCard;
