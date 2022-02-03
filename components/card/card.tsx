import Image from 'next/image'
import styles from './card.module.css'

export default function Card(name: string){

	return (
		<div className={styles.container}>
			<Image src="img_avatar.png" alt="Avatar" />
			<div className={styles.container}>
				<h4>
					<b>John Doe</b>
				</h4>
				<p>Architect & Engineer</p>
			</div>
		</div>
	);
}