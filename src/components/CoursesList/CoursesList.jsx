import React, { useState, useEffect } from 'react'
import CourseCard from '../CourseCard/CourseCard';
import Input from '../UI/input/Input'
import styles from './CoursesList.module.css'
import data from '../../assets/courses.json'
function CourseList() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setCourses(data);
            } catch (error) {
                console.error('Помилка завантаження курсів:', error);
            }
        };

        fetchCourses();
    }, []);
    const handleDeleteCourse = (id) => {
        console.log('Удаление курса с ID:', id);
        setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
    };
    return (
        <div>
            <h1 style={{ marginLeft: '470px' }}>Мої курси</h1>
            <div className={styles.courses_main}>

                <div>

                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} onDelete={handleDeleteCourse} />
                    ))}
                </div>
                <div>
                    <Input />
                </div>
            </div>

        </div>
    )
}

export default CourseList