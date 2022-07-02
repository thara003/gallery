import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
 
export default function GalleryCard() {
  return (
    <Card className="py-5 mx-2 my-6 w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="/img/blog.jpg"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Event name
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">
          <a href="">Show more &rarr;</a></Typography>
      </CardFooter>
    </Card>
  );
}