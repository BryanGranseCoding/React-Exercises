import React, { useEffect, useState } from "react";

type Score = {
    studentScore: number;
    gradeItems: number;
}

const CalculateGrade: React.FC<Score> =  ({ studentScore, gradeItems }) => {

    const [studentRemarks, setStudentRemarks] = useState<string>("");
    const [totalGrade, setTotalGrade] = useState<number>(0);

    useEffect(() => {
        if (gradeItems !== 0) { /* Para maiwasan ang division by zero */
            const calculatedGrade = (studentScore / gradeItems) * 100;
            setTotalGrade(calculatedGrade);
            
            if (calculatedGrade >= 90) {
                setStudentRemarks("A");
            } else if (calculatedGrade >= 80) {
                setStudentRemarks("B");
            } else if (calculatedGrade >= 70) {
                setStudentRemarks("C");
            } else {
                setStudentRemarks("It's okay study more next time!...");
            }
        } else {
            setStudentRemarks("Invalid gradeItems (cannot be zero)");
        }
    }, [studentScore, gradeItems]); /* Dependecy array para sa useEffect */

    return (
        <>
        <h1>Exam Items is: {gradeItems}</h1>
        <h2>Student Score is: {studentScore}</h2>
        <p>Final Grade is: {totalGrade}</p>
        <p>Remarks: {studentRemarks}</p>
        </>
    )

}

export default CalculateGrade;

{/* passing props sample to other component
    <CalculateGrade studentScore={80} gradeItems={150} /> */}