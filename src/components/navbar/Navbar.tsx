import logoImg from '../../../src/assets/main_logo.png'

export const Navbar = () => {
    return (
        <div className="mx-5 my-3 flex items-start">
            <img className='h-15 w-auto object-contain bloc md:block' src={logoImg} alt="mainlogo" />
        </div>
    )
}
