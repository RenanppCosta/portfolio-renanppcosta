import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import fotoRenan from "../../assets/images/avatar-renan.jpeg";

export default function AboutMe(){
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".avatar-img", 
            { 
                opacity: 1, 
                y: 0,
                duration: 1,
                scrollTrigger:{
                    trigger: ".avatar-img",
                    start: "top 50%",    
                    toggleActions: "play reverse play reverse",
            }
            },
        )

        gsap.to(".text-about", 
            {
                opacity: 1,
                y: 0,
                scrollTrigger:{
                    trigger: ".text-about"
                }
            }
        )

        return () =>{
            gsap.killTweensOf(".avatar-img");
            gsap.killTweensOf(".text-about");
        }

    }, [])
    return(
        <>
            <section className="flex items-center justify-center flex-col max-w-7xl w-full mx-auto">
                <h3 className="text-white text-3xl mb-12">Sobre Mim</h3>
                <div className="flex items-center justify-center flex-col lg:flex-row-reverse lg:items-start lg:p-8">
                    <img className="avatar-img rounded-full p-5 opacity-0 -translate-y-32" src={fotoRenan} alt="Foto de um avatar do Renan" />
                    <p className="text-about text-white text-center p-4  sm:text-xl lg:text-start opacity-0 translate-y-20">Olá, me chamo Renan Costa, tenho 21 anos e sou um Desenvolvedor Full Stack. Atualmente faço faculdade
                        de Ciência da Computação na Universidade Veiga de Almeida. Como autodidata, estou sempre me aperfeiçoando
                        e explorando novas tecnologias para entregar soluções que fazem a diferença.
                    </p>
                </div>
            </section>
        </>
    )
}