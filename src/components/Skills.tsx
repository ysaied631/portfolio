import React from 'react';

const skills = {
  languages: ['Typescript', 'Python', 'C#'],
  frontendFrameworks: [
    'ReactJS',
    'VueJS',
    'NextJS',
    'Storybook',
    'Jest',
    'TailwindCSS',
  ],
  frontendStores: ['Zustand', 'Redux', 'Redis'],
  backendFrameworks: ['NodeJS/Express', 'GraphQL', '.NET', 'FastAPI'],
  dbs: ['MongoDB', 'MySQL', 'PostgreSQL', 'Elasticsearch'],
  atlassianProjectManagement: ['Jira', 'Confluence', 'Atlas'],
  orm: ['Prisma', 'EFCore'],
  automation: ['Selenium', 'CucumberJS'],
  gcp: [
    'VM instances',
    'Cloud functions',
    'Cloud run',
    'BigQuery',
    'Storage buckets',
  ],
  limited: ['React Native/Expo', 'YoloV8', 'Terraform', 'Playwright', 'Docker'],
};

const Skills = () => {
  console.log(Object.keys(skills));
  return (
    <div className="flex w-4/5 flex-col">
      <h2 className="mb-8 text-center text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
        Skills (not limited to)
      </h2>
      <div className="grid grid-cols-2 gap-y-8 text-center md:grid-cols-5">
        {Object.keys(skills).map((type) => (
          <div key={type} className="flex flex-col">
            {(skills as any)[type].map((skill: string) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
