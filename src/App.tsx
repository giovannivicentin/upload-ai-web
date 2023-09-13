import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload AI</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed with 💜 by Giovanni Vicentin
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-row-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Include the prompt for the AI..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="The generated result from AI..."
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Remember: you can use the{" "}
            <code className="text-violet-400">{"{transcription}"}</code>{" "}
            variable in your prompt to add the content of the selected video's
            transcription.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex ronded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Select video
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt" className="text-sm">
                Transcription prompt
              </Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 resize-none leading-relaxed"
                placeholder='Include keywords mentioned in the video, separated by commas ","'
              />
            </div>

            <Button type="submit" className="w-full">
              Upload Video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="model">Prompt</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title of YouTube</SelectItem>
                  <SelectItem value="description">Description of YouTube</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="model">Modelo</label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You will be able to customize this option soon.
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <label htmlFor="model">Temperature</label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs leading-relaxed text-muted-foreground italic">
                Higher values tend to make the result more creative and may
                introduce potential errors.
              </span>
            </div>

            <Separator />

            <Button className="w-full" type="submit">
              Execute
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
