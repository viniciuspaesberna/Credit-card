import React from 'react';

import styles from './styles.module.scss';

const Container: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.face}` + ' ' + `${styles.front}`}>
            <h3 className={styles.debit}>Debit Card</h3>
            <h3 className={styles.bank}>Bank Name</h3>
            <img className={styles.chip} src="/images/chip.png" alt="" />
            <h3 className={styles.number}>0123 4567 8901 2345</h3>
            <h5 className={styles.valid}><span>Valid<br />thru</span><span>10/23</span></h5>
            <h5 className={styles.cardHolder}>Matheus Viera da Silva</h5>
        </div>
        <div className={`${styles.face}` + ' ' + `${styles.back}`}>
            <div className={styles.blackbar}></div>
            <div className={styles.ccvtext}>
                <h5>Autorized Signature-not valid unless signed</h5>
                <div className={styles.whitebar}></div>
                <div className={styles.ccv}>123</div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora similique perferendis, facere quisquam assumenda voluptatum quia fugit eaque recusandae nobis minus accusantium modi, nostrum iure ad laudantium dolor eos consequuntur?</p>
        </div>
      </div>
    </section>
  );
}

export default Container;