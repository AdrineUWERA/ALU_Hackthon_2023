const { prisma } = require("../server/helpers/prisma");
const { courses } = require("./data");

async function main() {
  // delete pre-existing data
  await prisma.course.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.subTopic.deleteMany();

  // insert data
  for (const course of courses) {
    await prisma.course.create({
      data: {
        name: course.name,
        topics: {
          create: course.topics.map((topic) => {
            return {
              name: topic.name,
              description: topic.description,
              subTopics: {
                create: [...topic.subTopics],
              },
            };
          }),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Data Seeded well");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

/**
 * const aiCourse = {
 *  courseName: "AI",
 *  topics: [
 *      {
 *      name: "Intro to AI",
 *      description: "Small Introduction to AI",
 *      subTopics: [
 *      {
 *          title: "Definition of AI",
 *          content: "..."
 *      }
 *      ]
 *          },
 *      ]
 * }
 *
 */
