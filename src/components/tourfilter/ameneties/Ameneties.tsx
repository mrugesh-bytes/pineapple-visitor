import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../common/popup/Popup';
import styles from './Ameneties.module.css';

const Ameneties = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.amenetiesWrapper}>
            <Popup open={open} setOpen={setOpen} />

            <div className={styles.title}>
                <h4>Select Amenities</h4>
                <Link className={styles.selectAll} to="/">
                    Select All
                </Link>
            </div>
            <div className={styles.selectContainer}>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="business-cetner" />
                    <label htmlFor="business-cetner">
                        <span></span> Business Cetner
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="pet-park" />
                    <label htmlFor="pet-park">
                        <span></span> Pet Park
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="clubhouse" />
                    <label htmlFor="clubhouse">
                        <span></span> Clubhouse
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="ev-charger" />
                    <label htmlFor="ev-charger">
                        <span></span> EV Charger
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="spa" />
                    <label htmlFor="spa">
                        <span></span> Spa
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="conference-center" />
                    <label htmlFor="conference-center">
                        <span></span> Conference Center
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="pool" />
                    <label htmlFor="pool">
                        <span></span> Pool
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="bike-storage" />
                    <label htmlFor="bike-storage">
                        <span></span> Bike Storage
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="gym" />
                    <label htmlFor="gym">
                        <span></span> Gym
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="laundary-facility" />
                    <label htmlFor="laundary-facility">
                        <span></span> Laundary Facility
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="picnic-area" />
                    <label htmlFor="picnic-area">
                        <span></span> Picnic Area
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="playground" />
                    <label htmlFor="playground">
                        <span></span> Playground
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="courtyard" />
                    <label htmlFor="courtyard">
                        <span></span> Courtyard
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="tennis-court" />
                    <label htmlFor="tennis-court">
                        <span></span> Tennis Court
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="conciereg" />
                    <label htmlFor="conciereg">
                        <span></span> Conciereg
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="basketball-court" />
                    <label htmlFor="basketball-court">
                        <span></span> Basketball Court
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="mail-room" />
                    <label htmlFor="mail-room">
                        <span></span> Mail Room
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="recycling-center" />
                    <label htmlFor="recycling-center">
                        <span></span> Recycling Center
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="scenic-view" />
                    <label htmlFor="scenic-view">
                        <span></span> Scenic View
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="roof-deck" />
                    <label htmlFor="roof-deck">
                        <span></span> Roof Deck
                    </label>
                </div>
                <div className={styles.selectWrapper}>
                    <input type="checkbox" id="pet-washing-station" />
                    <label htmlFor="pet-washing-station">
                        <span></span> Pet Washing Station
                    </label>
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <button onClick={() => setOpen(true)}>Apply (10) Amenities</button>
                <div>
                    <Link className={styles.clearAll} to="/">
                        Clear All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Ameneties;
