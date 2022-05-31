import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Project = (props) => {

    return (
        <a href={props.link} >
            <Card sx={{ maxWidth: 600 }} className='project-card' data-aos="fade-down" data-aos-delay="50" data-aos-duration="1800">

                <CardMedia
                    component="img"
                    height="140"
                    image={props.src}
                    alt={props.alt}
                    className='card-img'
                // data-aos="fade-down-left" data-aos-delay="0"  data-aos-duration="0"
                />
                <CardContent >
                    <Typography gutterBottom variant="h6" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body1" >
                        {props.description}
                    </Typography>
                </CardContent>

            </Card>
        </a>
    )
}

export default Project;
