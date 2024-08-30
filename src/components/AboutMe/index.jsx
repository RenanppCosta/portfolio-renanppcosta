import fotoRenan from "../../assets/images/avatar-renan.jpeg";

export default function AboutMe(){
    return(
        <>
            <section className="flex items-center justify-center flex-col">
                <h3 className="text-white text-3xl mb-12">Sobre Mim</h3>
                <img className="rounded-full p-5" src={fotoRenan} alt="Foto Pessoal do Renan" />
                <p className="text-white text-center p-4">Olá, me chamo Renan Costa, tenho 21 anos e sou um Desenvolvedor Full Stack. Atualmente faço faculdade
                    de Ciência da Computação na Universidade Veiga de Almeida. Como autodidata, estou sempre me aperfeiçoando
                    e explorando novas tecnologias para entregar soluções que fazem a diferença.
                </p>
            </section>
        </>
    )
}