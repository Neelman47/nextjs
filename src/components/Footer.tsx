    import React from "react";
    import Link from "next/link";

    export default function Footer() {
    return (
        <footer className=" bg-gradient-to-b from-purple-200 to-rose-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2">
                    <div>
                        <h4 className="text-2xl font-bold">Quick Links</h4>
                        <Link key={`home`} href='/' >    
                            <span className="">Home</span>
                        </Link> <br />                    
                        <Link key={`about`} href='/about' >    
                            <span className="">About us</span>
                        </Link> <br />                    
                        <Link key={`contact`} href='/contact' >    
                            <span className="">Contact us</span>
                        </Link> <br />                    
                        <Link key={`login`} href='/login' >    
                            <span className="">Login</span>
                        </Link> <br />                    
                        <Link key={`signup`} href='/signup' >    
                            <span className="">Signup</span>
                        </Link> <br />                    
                    </div>
                    <div className="lg:border-s-2 lg:ps-2 lg:border-gray-400 border-0">
                    <h4 className="text-2xl font-bold">About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum fugit autem dolorum mollitia natus quae quisquam at facere officia, nihil vel a ipsa, nulla rem nemo deleniti nobis? Veritatis consequatur a impedit nisi ipsam! Dolorem corrupti ab aspernatur, ut fuga earum quo repudiandae accusantium laboriosam dolorum nemo, vitae tempore.
                        </p>     
                    </div>
                    <div  className="lg:border-s-2 lg:ps-2 lg:border-gray-400 border-0">
                    <h4 className="text-2xl font-bold">Follow Us</h4>
                        icons <br />              
                    </div>
                    <div  className="lg:border-s-2 lg:ps-2 lg:border-gray-400 border-0">
                    <h4 className="text-2xl font-bold">Contact Us</h4>
                        <p>22 Neel Complex,</p>             
                        <p>Example road,</p>             
                        <p>Vadodata, Gujarat</p>             
                        <p>Email: abc@test.com</p>             
                        <p>Phone: +91 12345 67890</p>             
                    </div>
                </div>
                <hr className="text-gray-400"/>
                <p className="text-center p-4"> @ 2025 Neel Shah. All rights reserved.</p>
        </footer>
    );
    }
