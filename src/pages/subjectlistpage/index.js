import React, { useEffect, useState } from "react";
import { Col, Flex, Modal, Row, Typography } from "antd";

import api from "../../api";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function SubjectListPage() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [challengeTypes, setChallengeType] = useState([
    { value: "hangman", label: "Hangman" },
    { value: "qnas", label: "Chon dap an dung" },
    { value: "arrange", label: "Sap xep" },
  ]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await api.subjects.invoke();
    setSubjects(response.data.data);
  };

  const play = (challengeType) => {
    navigate(
      `/take-challenge?challengeType=${challengeType}&subjectId=${selectedSubject._id}`
    );
  };

  useEffect(() => {
    // lay danh sach subject
    fetchData();
  }, []);

  return (
    <div className="subject-list-page">
      {subjects.length > 0 ? (
        <Row gutter={[20, 20]}>
          {subjects.map((subject) => (
            <Col sm={5} key={subject._id}>
              <div
                className="subject-list-item"
                onClick={() => setSelectedSubject(subject)}
              >
                {subject.name}
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Loading Subjects ... </p>
      )}

      <Modal
        title={selectedSubject?.name}
        open={selectedSubject}
        onCancel={() => setSelectedSubject(null)}
      >
        <Typography.Paragraph>
          Bạn sẽ thực hiện chủ đề này với thử thách
        </Typography.Paragraph>
        <Flex gap={20} className="challenge-type-list">
          {challengeTypes.map((challengeType) => (
            <div
              className="challenge-type-list-item"
              key={challengeType.value}
              onClick={() => play(challengeType.value)}
            >
              {challengeType.label}
            </div>
          ))}
        </Flex>
      </Modal>
    </div>
  );
}
