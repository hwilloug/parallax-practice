import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Image } from 'mui-image'
import { Typography, AppBar, Container, Toolbar } from '@mui/material'

export default function Parallax2() {

    const alignCenter = { display: 'flex', alignItems: 'center'}

    return (
        <>
            <Parallax pages={5} style={{
                backgroundColor: 'black',
                color: 'lightgrey'
            }}>
                <ParallaxLayer>
                    <AppBar color="secondary">
                        <Container maxWidth='xl'>
                            <Toolbar disableGutters>
                                <Typography variant="h5">Page Name</Typography>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </ParallaxLayer>

                <ParallaxLayer offset={0.1} style={{display: 'flex', gap: '20px'}}>
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5} style={{...alignCenter, justifyContent: 'flex-end'}}>
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                </ParallaxLayer>
                <ParallaxLayer offset={1.4} speed={0.5} style={{...alignCenter, justifyContent: 'flex-end'}}>
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                </ParallaxLayer>
                <ParallaxLayer offset={1.8} speed={0.5} style={{...alignCenter, justifyContent: 'flex-end'}}>
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                </ParallaxLayer>
                <ParallaxLayer sticky={{start: 0.5, end: 1.5}} style={{...alignCenter}}>
                    <Container>
                        <Typography variant='h5'>Section Title</Typography>
                        <Typography width="50%" sx={{pl: '20px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Elit eget gravida cum sociis natoque penatibus. Netus et malesuada fames ac turpis egestas integer eget aliquet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Nullam vehicula ipsum a arcu cursus vitae congue. At varius vel pharetra vel turpis nunc eget lorem. Faucibus vitae aliquet nec ullamcorper. Mi in nulla posuere sollicitudin aliquam ultrices. Sit amet tellus cras adipiscing enim eu turpis. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Sed libero enim sed faucibus turpis. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Enim lobortis scelerisque fermentum dui. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Dolor sit amet consectetur adipiscing elit ut. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Lobortis scelerisque fermentum dui faucibus in. Turpis massa sed elementum tempus egestas sed sed risus.
                        </Typography>
                    </Container>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.5} style={{...alignCenter, justifyContent: 'flex-end'}}>
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                </ParallaxLayer>
                <ParallaxLayer offset={3.4} speed={0.5} style={{...alignCenter, justifyContent: 'flex-end'}}>
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                </ParallaxLayer>
                <ParallaxLayer offset={3.8} speed={0.5} style={{...alignCenter, justifyContent: 'flex-end'}}>
                    <Image src='https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg' width="40%" height="40%" />
                </ParallaxLayer>
                <ParallaxLayer sticky={{start: 2.5, end: 3.5}} style={{...alignCenter}}>
                    <Container>
                        <Typography variant="h5">Section Title</Typography>
                        <Typography width="50%" sx={{pl: '20px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Elit eget gravida cum sociis natoque penatibus. Netus et malesuada fames ac turpis egestas integer eget aliquet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Nullam vehicula ipsum a arcu cursus vitae congue. At varius vel pharetra vel turpis nunc eget lorem. Faucibus vitae aliquet nec ullamcorper. Mi in nulla posuere sollicitudin aliquam ultrices. Sit amet tellus cras adipiscing enim eu turpis. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Sed libero enim sed faucibus turpis. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Enim lobortis scelerisque fermentum dui. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Dolor sit amet consectetur adipiscing elit ut. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Lobortis scelerisque fermentum dui faucibus in. Turpis massa sed elementum tempus egestas sed sed risus.
                        </Typography>
                    </Container>
                </ParallaxLayer>

                <ParallaxLayer offset={4.9} style={{backgroundColor: 'purple'}}>
                    <Typography>Footer</Typography>
                </ParallaxLayer>
            </Parallax>
        </>
    )
}