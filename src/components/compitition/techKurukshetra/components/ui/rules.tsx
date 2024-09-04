import { motion } from 'framer-motion';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const rules1 = [
  "You must treat all team members, competitors, judges, coaches, volunteers, etc, with respect and courtesy, abiding by the code of conduct of Tech KuruKshetra. If any participant or participants fails to follow the code of conduct, the entire team will be disqualified.",
  "The participants can form a team of 2 to a maximum of 4 people.",
  "Only students or EMCRs who are not event organisers, volunteers, judges, sponsors, or in any other privileged position at the event should be a part of the team.",
  "The organizers, volunteers, sponsors, and others can provide teams with guidance and support if they need it.",
  "In their initiatives, teams can make use of libraries, frameworks, or APIs. However, it is against the spirit of the guidelines and not permitted to work on a project before the event and open-source it with the express intention of using the code during the event, and the team will be disqualified.",
  "Judging will be based on idea, presentation and working of application."
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Rules: React.FC = () => {
  return (
    <Fade direction='left' duration={1300}>

   
    <div className="p-4 md:p-8 lg:p-12 relative z-[100] min-h-screen flex items-center justify-center" id='rule'>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-2xl font-bold mb-4">Event Rules</h1>
        <ul className="list-disc list-inside space-y-4">
          {rules1.map((rule, index) => (
            <motion.li key={index} variants={itemVariants} className="text-gray-700 text-justify">
              {rule}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div> </Fade>
  );
};

export default Rules;
