'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      // TODO: Update your data here

      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>MuleSoft</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Masters in Information Systems</li>
        <li>Bacherlors in Electronics and Communication Engineering</li>
      </ul>
    ),
  },

  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-2">
        <li>Integration developer at Cognizant</li>
        <li>Java Intern</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            molestiae maiores voluptatum temporibus harum, officia doloremque
            non explicabo corrupti culpa aperiam in labore sit, rem porro
            accusamus tenetur autem dolore?
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
