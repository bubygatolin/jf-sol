
import Link from 'next/link';
import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';
import Image from 'next/image';
import logo from '../../../public/images/logo.jpg';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" legacyBehavior>
          <a>
          <Image src={logo} alt="Logo Meu board" />
          </a>
        </Link>
        <nav>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/board" legacyBehavior>
            <a>Meu board</a>
          </Link>
          < a href=''>Sobre</a>
        </nav>

        <SignInButton/>
        
      </div>
    </header>
  )
}