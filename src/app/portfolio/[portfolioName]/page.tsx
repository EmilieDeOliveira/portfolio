"use client"
import React from 'react'
import './portfolio.css';
import { Project } from './project';
import { notFound } from "next/navigation";
import Title from '@/app/components/title/title';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Cursor from '@/app/components/cursor/cursor';

export default function Page({ params }: { params: { portfolioName: string } }) {
  const { portfolioName } = params;
  const project = Project.find(p => p.name === portfolioName);

  if (!project) {
    notFound();
  }

  let description = project.descr.split("\n");
  return (
    <div className="portfolio">
      <Container>
        <Cursor />
        <Row>
          <Col>
            <Title text={portfolioName.toUpperCase()}></Title>
          </Col>
        </Row>

        <Row lg={2} md={1} sm={1} xs={1}>
          <Col>
            <Row>
              <Col>
                <div className="pt-3 pb-3">Réalisé le: <span>{project.date}</span></div>
              </Col>
              <Col>
                <div className="pt-3 pb-3 text-end">Techno utilisé: <span>{project.techno}</span></div>
              </Col>
            </Row>
            <Row>
              <Col>

                {description.map((string, i) => (
                  <p key={i}>{string}</p>
                ))}
                {project.url && <p>Lien :  <Link href={project.url} target="_blank">{project.url}</Link></p>}
              </Col>
            </Row>
          </Col>

          <Col>
            <Row xs={2}>
              {project.srcImg.map((img: string, i: number) =>
                <Col key={i} >
                  <Image
                    src={img}
                    alt={""}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='projectImage'
                    style={{ width: '100%', height: 'auto' }} />
                </Col>
              )}
            </Row>

          </Col>
        </Row>
      </Container>
    </div>

  );
}
