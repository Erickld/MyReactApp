import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './About.css'

const About = () => {
    return (
        <div className='main--container'>
            <Card sx={{ maxWidth: 400 }} className='card--container'>
            <CardActionArea>
                <CardMedia
                    className='img--profile--container'
                    component="img"
                    image="/public/images/profile.jpg"
                    alt="profile image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Erick Luciano
                </Typography>
                <Typography color="white" gutterBottom variant="body2" component="div" align="left" className='contact-info'>
                    • Correo: erickld.24@gmail.com
                    <br/>
                    • GitHub: https://github.com/Erickld
                </Typography>
                <Typography variant="body2" align="justify" className='description-info'>
                    Mi formación como Ingeniero en Mecatrónica me ha proporcionado una sólida base en resolución de problemas y pensamiento lógico, habilidades que he llevado con entusiasmo al campo del desarrollo web.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
};

export default About;









