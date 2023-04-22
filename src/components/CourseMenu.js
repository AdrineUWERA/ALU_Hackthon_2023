import Card from "./UI/Card";
const CourseMenu = () => {
    const image = "https://th.bing.com/th/id/R.130d7c62ccc7d52a21a4dfeb45171bff?rik=4HxzAkwkw9MeVg&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2020%2f10%2fOnline-Learning-Vector-Illustration.jpg&ehk=yEprb3st8RA7Q4yaFyq8QqBHPsP1AMV2LqD4ly39qVI%3d&risl=&pid=ImgRaw&r=0"
    const title = "Artificial intelligence"
    const description = "Train a model. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    return (
    <div>
      <Card imageUrl={image} title={title} description={description}/>
    </div>
  );
};

export default CourseMenu;
