import { Button } from "@/components/ui/button";
import { DownloadIcon, RocketIcon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Test() {
  return (
    <div>
      {/* Buttons */}
      <Button variant="outline">Button 1</Button>
      <Button variant="destructive">Destructive 1</Button>
      <Button variant="default">Default 1</Button>
      <Button variant="link">Link 1</Button>
      <Button disabled>Disabled</Button>

      {/* Icon */}
      <Button variant="outline" size="icon">
        <TrashIcon className="h-4 w-4" />
      </Button>
      <Button variant="destructive">
        <TrashIcon className="h-4 w-4 mr-2" /> Delete
      </Button>
      <Button disabled>
        Uploading <DownloadIcon className="ml-2 h-4 w-4 animate-bounce" />
      </Button>

      {/* Link */}
      <Button asChild variant="ghost">
        <Link href="/login">Login</Link>
      </Button>

      {/* Alert */}
      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      {/* Card */}
      <Card>
        <CardHeader>
          <CardTitle>Learn Java Step by Step</CardTitle>
          <CardDescription>Course by Subrata Mukherjee</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            doloribus ducimus. Molestiae rem sint enim ea consequatur laboriosam
            debitis, iste, laborum suscipit ipsam consectetur cumque odio
            blanditiis delectus obcaecati assumenda?
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="destructive">Start Watching</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
