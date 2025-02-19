import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { SillyCard } from "@/components/silly-card";
import { useToast } from "@/components/ui/use-toast";

export function Home() {
  const { toast } = useToast();

  const handleSillyClick = () => {
    toast({
      title: "Ой-ой-ой!",
      description: "Вы нажали на самую глупую кнопку в мире! 🎈",
    });
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Typography.H1 className="mb-4">
          Добро пожаловать на самый глупый сайт! 🎪
        </Typography.H1>
        <Typography.Lead className="mb-8">
          Здесь нет ничего серьезного, только веселье и нелепости!
        </Typography.Lead>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <SillyCard
          title="Прыгающая карточка! 🦘"
          content="Эта карточка любит прыгать. Наведите на неё курсор и посмотрите, что будет!"
          buttonText="Нажми меня!"
          onButtonClick={handleSillyClick}
        />
        <SillyCard
          title="Вертящаяся карточка! 🌀"
          content="А эта карточка обожает кружиться. Она немного непоседливая!"
          buttonText="Кружись!"
          onButtonClick={handleSillyClick}
        />
        <SillyCard
          title="Дрожащая карточка! 🤪"
          content="Эта карточка немного нервничает. Или просто выпила слишком много кофе!"
          buttonText="Пощекотать!"
          onButtonClick={handleSillyClick}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Typography.H2 className="mb-4">
          Что здесь происходит? 🎭
        </Typography.H2>
        <Typography.P className="mx-auto max-w-2xl">
          Этот сайт создан исключительно для веселья! Здесь вы найдете
          прыгающие кнопки, вращающиеся карточки и много других глупостей.
          Не воспринимайте это слишком серьезно - просто наслаждайтесь! 🎪
        </Typography.P>
      </motion.div>
    </div>
  );
}