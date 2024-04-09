/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './CourseCard.module.css';
import Button from '../UI/button/Button';
import settings from '../../assets/settings.png';

function CourseCard({ course, onDelete }) {


    const [modalOpen, setModalOpen] = useState(false);

    const handleSettingsClick = () => {
        setModalOpen(!modalOpen);
    };
    const handleCancelRegistration = () => {
        console.log(course.id)
        onDelete(course.id);
    };

    return (
        <div className={styles.card_container}>
            <div>
                <img
                    src={`public/${course.photo}`}
                    className={styles.course_photo}
                />
            </div>
            <div>
                <div>
                    <h3>{course.title}</h3>
                    <p>{course.author}</p>
                    <p>{course.start}</p>
                </div>
                <div className={styles.footer_card}>
                    <div>
                        <img
                            src={settings}
                            alt='settings'
                            className={styles.settings_item}
                            onClick={handleSettingsClick}
                        />
                    </div>
                    {course.button ? (
                        <Button appearence='ghost' content='Подивитися курс' />
                    ) : null}
                </div>
            </div>
            {modalOpen && (
                <div className={styles.modal_settings}>
                    <Button appearence='ghost' content={<><span>Відмінити </span><br />регістрацію</>} onClick={handleCancelRegistration} />
                    <Button appearence='ghost' content={<><span>Налаштування </span><br />розсилок</>} />
                </div>
            )}
        </div>
    );
}

export default CourseCard;
