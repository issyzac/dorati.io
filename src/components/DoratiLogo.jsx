import { Matemasie, Lexend, Tilt_Prism
} from 'next/font/google'

const tiltPrism = Tilt_Prism({
    subsets: ['latin'],
    style: ["normal"],
});

export function DoratiLogo (props){
    return(
        <p className={tiltPrism.className} {...props}> Dorati </p>
    )
}