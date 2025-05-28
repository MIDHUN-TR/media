import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <div className='container-fluid  '>
                <div className="w-100 row ">
                    <div className="col">
                        <h1>Media player 2025</h1>
                        <p style={{ textAlign: "justify" }} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatem doloribus voluptate sed facere debitis distinctio neque minus accusamus illo. Officia, voluptatibus illum non fugiat maiores quam iure quia ducimus.</p>
                        <div className="d-grid">
                            <Link className='btn btn-success' to={'/log'}>Click For More..</Link>
                        </div>
                    </div>
                    <div className="col">
                        <img style={{ width: "100%" }} src="https://static.vecteezy.com/system/resources/previews/026/987/413/non_2x/single-continuous-line-drawing-male-vlogger-unbox-and-review-product-live-on-youtube-in-studio-social-media-influencer-recording-unboxing-video-at-home-one-line-draw-design-illustration-png.png" alt="" />
                    </div>
                </div>


                <div className='w-100 d-flex justify-content-around py-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/88/60/c0/8860c0ee4fb6e265800445bac368f234.gif" height={'250px'} />
                        <Card.Body>
                            <Card.Title>Save Youtube videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/23385872/file/original-38f30f764232f3cff60624c67e6a8eef.gif" height={'250px'} />
                        <Card.Body>
                            <Card.Title>Play Youtube videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/79/7b/96/797b96e0880a4fe147f1eaa89d7c7013.gif" height={'250px'} />
                        <Card.Body>
                            <Card.Title>Download Youtube videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="w-100 row border mx-2 shadow border-3">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/video-app-illustration-download-in-svg-png-gif-file-formats--like-logo-play-mobile-streaming-media-apps-and-services-pack-design-development-illustrations-3742568.png"
                                className='w-100' />

                        </div>
                        <div className="col-8 p-3 d-flex flex-column justify-content-center">
                            <h1>Simple , Fast and Secure</h1>
                            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit commodi eligendi, nihil tempore cupiditate magnam non consequuntur? Est amet fuga esse! Ex, sint? Aspernatur omnis dolores voluptatem nobis itaque!</p>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col">
                            <h2>Watch your favorite videos and save them</h2>
                            <p className="mt-4" style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nam, et nobis minima numquam cum molestias omnis. Culpa iste, exercitationem placeat cumque officia obcaecati? Assumenda dolore impedit dolorem tenetur consequuntur.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus doloremque rem ea eius eligendi sed iusto velit atque, perspiciatis dicta, a quisquam dolorem fugit, praesentium est sunt. Error, ad!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eum fuga architecto eius a, at impedit quae tenetur, velit fugiat deleniti quisquam perspiciatis suscipit accusamus dignissimos ullam magni quia. Fugit.
                            </p>
                        </div>
                        <div className="col">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/aLp7E6A2u7k?si=MkEAqFvMll5bXdmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Landing
