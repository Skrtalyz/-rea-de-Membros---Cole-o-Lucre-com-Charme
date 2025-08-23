"use client";

import * as React from "react";
import { BookOpen, PlayCircle, Menu, CheckCircle, ArrowRight, Home, KeyRound } from "lucide-react";

import { courseData, type Lesson, type Module } from "@/data/course";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { YarnIcon } from "@/components/icons";
import { SuccessKeys } from "@/components/success-keys";

type ActiveView = "welcome" | "course" | "success-keys";

export function CourseUI() {
  const [currentLesson, setCurrentLesson] = React.useState<Lesson | null>(null);
  const [currentModule, setCurrentModule] = React.useState<Module | null>(null);
  const [completedLessons, setCompletedLessons] = React.useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [activeView, setActiveView] = React.useState<ActiveView>("welcome");
  
  const totalLessons = React.useMemo(() => courseData.reduce((acc, module) => acc + module.lessons.length, 0), []);
  const progressPercentage = totalLessons > 0 ? (completedLessons.size / totalLessons) * 100 : 0;

  // Load progress from localStorage
  React.useEffect(() => {
    try {
      const savedLastLesson = localStorage.getItem("colecao-lucre-com-charme-last-lesson");
      const savedCompletedLessons = localStorage.getItem("colecao-lucre-com-charme-completed");
      
      let lessonToLoad: Lesson | null = null;
      let moduleToLoad: Module | null = null;
      let initialView: ActiveView = "welcome";

      if (savedLastLesson) {
        const { moduleId, lessonId } = JSON.parse(savedLastLesson);
        moduleToLoad = courseData.find((m) => m.id === moduleId) ?? null;
        if (moduleToLoad) {
          lessonToLoad = moduleToLoad.lessons.find((l) => l.id === lessonId) ?? null;
          if (lessonToLoad) {
            initialView = "course";
          }
        }
      }
      
      if (savedCompletedLessons) {
        setCompletedLessons(new Set(JSON.parse(savedCompletedLessons)));
      }
      
      setActiveView(initialView);
      setCurrentLesson(lessonToLoad);
      setCurrentModule(moduleToLoad);
    } catch (error) {
      console.error("Falha ao carregar o progresso do curso:", error);
      setActiveView("welcome");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save progress to localStorage
  React.useEffect(() => {
    try {
      if (activeView === "course" && currentLesson && currentModule) {
        const lastLesson = JSON.stringify({
          moduleId: currentModule.id,
          lessonId: currentLesson.id,
        });
        localStorage.setItem("colecao-lucre-com-charme-last-lesson", lastLesson);
      }
      localStorage.setItem("colecao-lucre-com-charme-completed", JSON.stringify(Array.from(completedLessons)));
    } catch (error) {
      console.error("Falha ao salvar o progresso do curso:", error);
    }
  }, [currentLesson, currentModule, completedLessons, activeView]);

  const handleLessonClick = (lesson: Lesson, module: Module) => {
    setCurrentLesson(lesson);
    setCurrentModule(module);
    setActiveView("course");
    setIsSheetOpen(false);
  };

  const handleStartCourse = () => {
    const firstModule = courseData[0] ?? null;
    const firstLesson = firstModule?.lessons[0] ?? null;
    if (firstLesson && firstModule) {
        handleLessonClick(firstLesson, firstModule);
    }
  };
  
  const handleHomeClick = () => {
    setActiveView("welcome");
    setIsSheetOpen(false);
  };
  
  const handleSuccessKeysClick = () => {
    setActiveView("success-keys");
    setIsSheetOpen(false);
  }

  const findNextLesson = () => {
      if (!currentModule || !currentLesson) return null;

      const currentModuleIndex = courseData.findIndex(m => m.id === currentModule.id);
      const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);

      // Next lesson in the same module
      if (currentLessonIndex < currentModule.lessons.length - 1) {
          const nextLesson = currentModule.lessons[currentLessonIndex + 1];
          return { module: currentModule, lesson: nextLesson };
      }
      
      // Next lesson is in the next module
      if (currentModuleIndex < courseData.length - 1) {
          const nextModule = courseData[currentModuleIndex + 1];
          const nextLesson = nextModule.lessons[0];
          return { module: nextModule, lesson: nextLesson };
      }

      return null; // Last lesson of the course
  };

  const nextLessonData = findNextLesson();

  const handleNextLesson = () => {
    if (currentLesson) {
        setCompletedLessons(prev => new Set(prev).add(currentLesson.id));
    }
    if (nextLessonData) {
        setCurrentModule(nextLessonData.module);
        setCurrentLesson(nextLessonData.lesson);
    }
  };

  const SidebarContent = () => (
    <>
      <div className="flex flex-col h-full">
        <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <YarnIcon className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-headline text-primary">Coleção Lucre com Charme</h1>
            </div>
            <div className="space-y-2">
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-center text-muted-foreground">{Math.round(progressPercentage)}% completo</p>
            </div>
        </div>
        <div className="px-4 pb-2 space-y-2">
            <Button
                variant="ghost"
                onClick={handleHomeClick}
                className={cn(
                    "justify-start gap-3 pl-4 transition-all duration-300 h-auto py-3 leading-normal w-full text-lg",
                    activeView === 'welcome'
                    ? "bg-accent text-accent-foreground font-bold"
                    : "text-foreground/70 hover:bg-accent/50 hover:text-accent-foreground"
                )}
            >
                <Home className="w-5 h-5" />
                <span className="flex-1 text-left">Início</span>
            </Button>
            <Button
                variant="ghost"
                onClick={handleSuccessKeysClick}
                className={cn(
                    "justify-start gap-3 pl-4 transition-all duration-300 h-auto py-3 leading-normal w-full text-lg",
                    activeView === 'success-keys'
                    ? "bg-accent text-accent-foreground font-bold"
                    : "text-foreground/70 hover:bg-accent/50 hover:text-accent-foreground"
                )}
            >
                <KeyRound className="w-5 h-5" />
                <span className="flex-1 text-left">Chaves do Sucesso Rápido</span>
            </Button>
        </div>
        <ScrollArea className="flex-1">
          <Accordion type="single" collapsible defaultValue={currentModule?.id ?? courseData[0]?.id} className="w-full px-4">
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
                          "justify-start gap-3 pl-4 transition-all duration-300 h-auto py-2 leading-normal",
                          activeView === 'course' && currentLesson?.id === lesson.id
                            ? "bg-accent text-accent-foreground font-bold"
                            : "text-foreground/70 hover:bg-accent/50 hover:text-accent-foreground"
                        )}
                      >
                         {completedLessons.has(lesson.id) ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <PlayCircle className="w-5 h-5" />
                          )}
                        <span className="flex-1 text-left">{lesson.title}</span>
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

  const renderContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }
    switch (activeView) {
      case "welcome":
        return <WelcomeArea onStart={handleStartCourse} />;
      case "success-keys":
        return <SuccessKeys />;
      case "course":
        if (currentLesson) {
          return (
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
                  {nextLessonData ? (
                      <Button onClick={handleNextLesson} size="lg" className="w-full md:w-auto">
                          Marcar como concluída e ir para a próxima aula
                          <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                  ) : (
                      <Button onClick={() => setCompletedLessons(prev => new Set(prev).add(currentLesson.id))} size="lg" className="w-full md:w-auto" disabled={completedLessons.has(currentLesson.id)}>
                          {completedLessons.has(currentLesson.id) ? 'Parabéns! Você concluiu o curso!' : 'Finalizar Curso'}
                          <CheckCircle className="w-5 h-5 ml-2" />
                      </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        }
        return (
          <div className="flex items-center justify-center h-full">
            <p>Selecione uma aula para começar.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-96 border-r bg-white/50 shrink-0">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="lg:hidden flex items-center justify-between mb-4">
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
            <div className="flex items-center gap-2">
                <YarnIcon className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-headline text-primary">Coleção Lucre com Charme</h1>
            </div>
        </div>
        {renderContent()}
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

const WelcomeArea = ({ onStart }: { onStart: () => void }) => (
    <div className="h-full flex items-center justify-center transition-all duration-500 animate-in fade-in">
        <Card className="max-w-2xl w-full text-center shadow-2xl">
            <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-24 h-24 flex items-center justify-center border-4 border-primary/20">
                    <YarnIcon className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-6xl font-headline text-primary mt-4">Seja Bem-Vinda!</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                    à <span className="font-bold text-primary/90">Coleção Lucre com Charme</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed text-lg">
                    Estamos muito felizes em ter você aqui! Prepare-se para uma jornada incrível pelo mundo do crochê, onde você aprenderá a criar peças lindas e lucrativas com todo o charme que você merece.
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg">
                    Escolha uma aula no menu ao lado para continuar de onde parou ou clique no botão abaixo para iniciar sua primeira aula.
                </p>
                <Button onClick={onStart} size="lg" className="w-full md:w-auto mt-4 text-xl h-14 px-10">
                    Começar a Crochetar Agora!
                    <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
            </CardContent>
        </Card>
    </div>
);
