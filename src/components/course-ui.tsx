"use client";

import * as React from "react";
import { BookOpen, PlayCircle, Youtube, Menu } from "lucide-react";

import { courseData, type Lesson, type Module } from "@/data/course";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { YarnIcon } from "@/components/icons";

export function CourseUI() {
  const [currentLesson, setCurrentLesson] = React.useState<Lesson | null>(null);
  const [currentModule, setCurrentModule] = React.useState<Module | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      const savedProgress = localStorage.getItem("colecao-lucre-com-charme-progress");
      let lessonToLoad: Lesson | null = null;
      let moduleToLoad: Module | null = null;

      if (savedProgress) {
        const { moduleId, lessonId } = JSON.parse(savedProgress);
        moduleToLoad = courseData.find((m) => m.id === moduleId) ?? null;
        if (moduleToLoad) {
          lessonToLoad = moduleToLoad.lessons.find((l) => l.id === lessonId) ?? null;
        }
      }

      if (!lessonToLoad) {
        moduleToLoad = courseData[0] ?? null;
        lessonToLoad = moduleToLoad?.lessons[0] ?? null;
      }

      setCurrentLesson(lessonToLoad);
      setCurrentModule(moduleToLoad);
    } catch (error) {
      console.error("Falha ao carregar o progresso do curso:", error);
      const firstModule = courseData[0] ?? null;
      const firstLesson = firstModule?.lessons[0] ?? null;
      setCurrentLesson(firstLesson);
      setCurrentModule(firstModule);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    if (currentLesson && currentModule) {
      try {
        const progress = JSON.stringify({
          moduleId: currentModule.id,
          lessonId: currentLesson.id,
        });
        localStorage.setItem("colecao-lucre-com-charme-progress", progress);
      } catch (error) {
        console.error("Falha ao salvar o progresso do curso:", error);
      }
    }
  }, [currentLesson, currentModule]);

  const handleLessonClick = (lesson: Lesson, module: Module) => {
    setCurrentLesson(lesson);
    setCurrentModule(module);
    setIsSheetOpen(false);
  };

  const SidebarContent = () => (
    <>
      <div className="flex flex-col h-full">
        <div className="p-6 flex items-center gap-4">
          <YarnIcon className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-headline text-primary">Coleção Lucre com Charme</h1>
        </div>
        <ScrollArea className="flex-1">
          <Accordion type="single" collapsible defaultValue={currentModule?.id} className="w-full px-4">
            {courseData.map((module) => (
              <AccordionItem value={module.id} key={module.id}>
                <AccordionTrigger className="text-lg font-bold text-primary/80 hover:text-primary transition-colors">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 pt-2">
                    {module.lessons.map((lesson) => (
                      <Button
                        key={lesson.id}
                        variant="ghost"
                        onClick={() => handleLessonClick(lesson, module)}
                        className={cn(
                          "justify-start gap-3 pl-4 transition-all duration-300",
                          currentLesson?.id === lesson.id
                            ? "bg-accent text-accent-foreground font-bold"
                            : "text-foreground/70 hover:bg-accent/50 hover:text-accent-foreground"
                        )}
                      >
                        <PlayCircle className="w-5 h-5" />
                        <span>{lesson.title}</span>
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
        <div className="p-4 border-t">
          <p className="text-xs text-muted-foreground text-center">Feito à mão com ♡ para criadores apaixonados.</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-96 border-r bg-white/50 shrink-0">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="lg:hidden flex items-center mb-4">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0 bg-white">
                   <SidebarContent />
                </SheetContent>
            </Sheet>
            <div className="ml-4 flex items-center gap-2">
                <YarnIcon className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-headline text-primary">Coleção Lucre com Charme</h1>
            </div>
        </div>
        
        {isLoading ? (
          <LoadingState />
        ) : currentLesson ? (
          <Card className="h-full flex flex-col transition-all duration-500 animate-in fade-in">
            <CardHeader>
              <CardTitle className="text-5xl font-headline text-primary">{currentLesson.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-2 text-base">
                <BookOpen className="w-5 h-5 text-primary/70" />
                <span>{currentModule?.title}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-6">
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border">
                <iframe
                  key={currentLesson.id}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${currentLesson.videoId}?autoplay=1&rel=0`}
                  title={currentLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">{currentLesson.description}</p>
                <Button asChild variant="link" className="p-0 h-auto text-base">
                  <a href={`https://www.youtube.com/watch?v=${currentLesson.videoId}`} target="_blank" rel="noopener noreferrer">
                    Assistir no YouTube <Youtube className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Não foi possível carregar a lição.</p>
          </div>
        )}
      </main>
    </div>
  );
}

const LoadingState = () => (
    <Card className="h-full flex flex-col">
        <CardHeader>
            <Skeleton className="h-12 w-3/4 rounded-md" />
            <Skeleton className="h-6 w-1/2 mt-2 rounded-md" />
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-6">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="space-y-4">
                <Skeleton className="h-5 w-full rounded-md" />
                <Skeleton className="h-5 w-5/6 rounded-md" />
                <Skeleton className="h-5 w-3/4 rounded-md" />
            </div>
        </CardContent>
    </Card>
);
