import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
// import { CardData } from "./CardData";
 
export default function GalleryCard({ title, description, imgSrc, href }) {
  return (
    <Card className="py-5 mx-2 my-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">
          <a href={href}>Show more &rarr;</a></Typography>
      </CardFooter>
    </Card>
  );
}