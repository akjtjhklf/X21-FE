import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, message } from "antd";
import { Col, Flex, Modal, Row, Typography } from "antd";
import SubjectsService from "../../../services/subject.service";
import { useNavigate } from "react-router-dom";

const ChooseSubject = () => {
    //     const [subjects, setSubjects] = useState([]);

    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 const response = await axios.get("http://localhost:3001/subjects");
    //                 setSubjects(response.data.data);
    //             } catch (error) {
    //                 console.log(error);
    //                 message.error(error.response.data.message);
    //             }
    //         };

    //         fetchData();
    //     }, []); // Empty dependency array ensures useEffect runs only once after initial render

    //     return (
    //         <div className="col-9">
    //             <div className="choose-title">
    //                 <h4>
    //                     Chọn chủ đề
    //                 </h4>
    //             </div>
    //             <div className="d-flex flex-row flex-wrap subject-main">
    //                 {subjects.map((subject) => (
    //                     <Button key={subject._id} className="subject-item">
    //                         <img src="/images/subjectimg.jpg"></img>
    //                         <span>{subject.name}</span>
    //                     </Button>
    //                 ))}
    //             </div>
    //         </div>
    //     );
    // };
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [challengeTypes, setChallengeType] = useState([
        { value: "hangman", label: "Hanging man" },
        { value: "qnas", label: "Chọn đáp án đúng" },
        { value: "arrange", label: "Sắp xếp câu" },
    ]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await SubjectsService.getAll();
                console.log(response)
                setSubjects(response.data);
            } catch (error) {
                console.log(error);
                message.error(error.response.data.message);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    const play = (challengeType) => {
        navigate(
            `/take-challenge?challengeType=${challengeType}&subjectId=${selectedSubject._id}`
        );
    };

    return (
        <div className="subject-list-page col-9">
            <div className="choose-title">
                <h4>
                    Chọn chủ đề
                </h4>
            </div>
            {subjects.length > 0 ? (
                <div className="d-flex flex-row flex-wrap subject-main">
                    {subjects.map((subject) => (
                        <Button key={subject._id} className="subject-item" onClick={() => setSelectedSubject(subject)}>
                            <img src="/images/subjectimg.jpg"></img>
                            <span>{subject.name}</span>
                        </Button>
                    ))}
                </div>
            ) : (
                <p>Loading Subjects ... </p>
            )}
            <Modal
                title={selectedSubject?.name}
                open={selectedSubject}
                onCancel={() => setSelectedSubject(null)}
                okButtonProps={{ style: { display: "none" } }}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                <Typography.Paragraph>Hãy chọn chế độ chơi :</Typography.Paragraph>
                <Flex gap={20} className="challenge-type-list">
                    {challengeTypes.map((challengeType) => (
                        <Button
                            className="subject-item"
                            key={challengeType.value}
                            onClick={() => play(challengeType.value)}
                        >
                            {challengeType.label}
                        </Button>
                    ))}
                </Flex>
            </Modal>
        </div>
    );
}
export default ChooseSubject;
