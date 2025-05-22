import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  duration: string;
  detailedDescription: {
    overview: string;
    challenges: string;
    solution: string;
    results: string;
    images: string[];
  };
}

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Mortal Coin",
      description:
        "Увлекательная игра в Telegram, где игроки могут зарабатывать и тратить виртуальную валюту, участвовать в турнирах и соревнованиях.",
      image: "/projects/mortal-coin/main.jpg",
      technologies: [
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Telegram Bot API",
        "Web3",
        "Solidity",
      ],
      features: [
        "Турнирная система",
        "Ежедневные задания",
        "Интеграция с Telegram",
        "Реальные биржевые ставки",
        "Безопасность и монетизация",
        "Удобный интерфейс",
      ],
      duration: "3 недели",
      detailedDescription: {
        overview:
          "Мы разработали интерактивную Telegram-игру в стиле файтингов, где игроки делают ставки на криптовалюту, которая сильнее всего вырастет за 10 секунд. Побеждает тот, кто точнее предсказывает рыночные движения, зарабатывая внутриигровую валюту и поднимаясь в рейтинге лидеров.",
        challenges:
          "Крипторынок волатилен, но большинство игр либо слишком сложны для новичков, либо не дают ощущения азарта. Нужно было создать простой, но увлекательный формат, который сочетает биржевую аналитику с динамичным геймплеем и соревновательным элементом.",
        solution:
          "Мы разработали гибридную архитектуру, сочетающую централизованную систему для быстрых игровых операций и блокчейн для хранения ценных активов. Внедрили систему шардинга для обработки большого количества транзакций и создали умные контракты для управления NFT.",
        results:
          "Игроки отметили адреналин от быстрых ставок и простоту механик. Проект доказал, что даже сложные финансовые концепции можно подать как увлекательный челлендж.",
        images: [
          "/projects/mortal-coin/main.jpg",
          "/projects/mortal-coin/vs.jpg",
          "/projects/mortal-coin/fight.jpg",
        ],
      },
    },
    {
      id: 2,
      title: "Jira Gamification Plugin",
      description:
        "Плагин для Jira, который превращает рутинные задачи в увлекательную игру, повышая вовлеченность команды и продуктивность.",
      image: "/projects/jira-gamification/zastav.gif",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Jira API",
        "Redis",
        "WebSocket",
      ],
      features: [
        "Система уровней и опыта",
        "Достижения за выполнение задач",
        "Рейтинговая таблица",
        "Награды за регулярность",
        "Интеграция с Jira",
        "Командные соревнования",
      ],
      duration: "3 месяца",
      detailedDescription: {
        overview:
          "Мы разработали плагин для Jira, который превращает рутинные рабочие задачи в увлекательную 3D-игру. Сотрудники зарабатывают виртуальную валюту за выполнение задач, повышают свой рейтинг и кастомизируют 3D-аватаров, делая рабочий процесс более мотивирующим и визуально приятным.",
        challenges:
          "Многие команды сталкиваются с низкой вовлеченностью в процесс выполнения задач в Jira. Сухие списки и стандартные доски не мотивируют сотрудников, а отсутствие игровых элементов делает работу монотонной. Нам нужно было интегрировать геймификацию так, чтобы она не мешала основному workflow, а дополняла его.",
        solution:
          " Решение включает персонализированных 3D-аватаров с системой прокачки и кастомизации (одежда, аксессуары, анимации), которые сотрудники могут улучшать, тратя виртуальную валюту, заработанную за выполнение задач, соблюдение сроков и помощь коллегам. Все игровые механики работают на базе существующих Jira-данных, автоматически преобразуя рабочие активности в игровые достижения, что позволяет сохранить привычный workflow команды при этом значительно повышая вовлеченность и мотивацию. Технически решение реализовано через lightweight-архитектуру с оптимизированными 3D-моделями, обеспечивающими плавную работу даже в браузерной версии Jira.",
        results:
          "Проект показал, что даже в корпоративных инструментах геймификация может значительно улучшить продуктивность.",
        images: [
          "/projects/jira-gamification/zastav.png.gif",
          "/projects/jira-gamification/chel.png",
          "/projects/jira-gamification/app.png",
          "/projects/jira-gamification/leaderboard.svg",
        ],
      },
    },
    {
      id: 3,
      title: "Sparkly Tasks",
      description:
        "Интерактивное приложение, которое помогает родителям мотивировать детей к учебе, развивающим занятиям и помощи по дому, с помощью игровых механик и системы вознаграждений.",

      image: "/projects/sparkly/main2.jpg",
      technologies: ["React", "TypeScript", "Firebase", "Framer Motion", "PWA"],
      features: [
        "Минималистичный и понятный UX",
        "Push-уведомления и напоминания",
        "Геймификация: очки, уровни, награды",
        "Синхронизация между устройствами",
        "Категории и теги задач",
      ],
      duration: "1 неделя",
      detailedDescription: {
        overview:
          "Мы разработали интерактивное веб-приложение, которое помогает родителям мотивировать детей выполнять повседневные задачи. Родители могут добавлять задания (например, убрать комнату или сделать уроки), а ребенок, отмечая их выполнение, получает вознаграждение — баллы или виртуальные плюшки, которые можно обменивать на реальные призы.",
        challenges:
          "Главной задачей было создать максимально отзывчивый и приятный интерфейс, который бы мотивировал ребенка возвращаться и закрывать задачи каждый день.",
        solution:
          "Мы создали интуитивно понятное веб-приложение с раздельными кабинетами для родителей и детей. Родительский интерфейс позволяет легко ставить задачи, назначать награды и отслеживать прогресс, а детская версия реализована как игра с ачивками, назначаемыми родителями, визуальным отображением заработанных баллов и каталогом призов",
        results:
          "Приложение было успешно протестировано в нескольких семьях, где отмечено повышение мотивации детей выполнять задачи и улучшение взаимодействия между родителями и детьми.",
        images: [
          "/projects/sparkly/main2.jpg",
          "/projects/sparkly/task.jpg",
          "/projects/sparkly/board.jpg",
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-solarized-base2/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-solarized-blue text-sm sm:text-base">
            {t("projects.title")}
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            {t("projects.subtitle")}{" "}
            <span className="text-solarized-cyan">
              {t("projects.subtitleHighlight")}
            </span>
          </h2>
          <p className="section-subtitle font-mono text-solarized-base01 text-sm sm:text-base">
            {t("projects.tagline")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-solarized-base3 rounded-lg overflow-hidden border border-solarized-base1/20 hover:border-solarized-blue/50 transition-colors"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-solarized-base01 mb-2">
                  {project.title}
                </h3>
                <p className="text-solarized-base1 text-sm mb-4">
                  {project.description}
                </p>
                <Button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-solarized-blue hover:bg-solarized-blue/90 text-white font-mono"
                >
                  {t("projects.viewProject")}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[800px] max-h-[90vh] bg-solarized-base3 p-0 overflow-y-auto">
          {selectedProject && (
            <div className="relative">
              <div className="aspect-[3/4] relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-solarized-base01 mb-4">
                  {selectedProject.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-solarized-blue font-mono mb-2">
                      {t("projects.modal.description")}
                    </h3>
                    <p className="text-solarized-base1 mb-4">
                      {selectedProject.description}
                    </p>

                    <h3 className="text-solarized-blue font-mono mb-2">
                      {t("projects.modal.features")}
                    </h3>
                    <ul className="list-disc list-inside text-solarized-base1 mb-4">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <div className="space-y-2">
                      <div>
                        <span className="text-solarized-blue font-mono">
                          {t("projects.modal.duration")}:{" "}
                        </span>
                        <span className="text-solarized-base1">
                          {selectedProject.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Description Section */}
                <div className="mt-8 border-t border-solarized-base1/20 pt-8">
                  <h3 className="text-2xl font-bold text-solarized-base01 mb-8 text-center">
                    Подробное описание проекта
                  </h3>

                  <div className="space-y-12">
                    {/* Overview Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-solarized-blue font-mono">
                          Обзор
                        </h4>
                        <p className="text-solarized-base1 leading-relaxed">
                          {selectedProject.detailedDescription.overview}
                        </p>
                      </div>
                      <img
                        src={selectedProject.detailedDescription.images[0]}
                        alt={`${selectedProject.title} overview`}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    {/* Challenges Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-solarized-blue font-mono">
                          Вызовы
                        </h4>
                        <p className="text-solarized-base1 leading-relaxed">
                          {selectedProject.detailedDescription.challenges}
                        </p>
                      </div>
                      <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-solarized-base2/50">
                        <img
                          src={selectedProject.detailedDescription.images[1]}
                          alt={`${selectedProject.title} challenges`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-solarized-blue font-mono">
                          Решение
                        </h4>
                        <p className="text-solarized-base1 leading-relaxed">
                          {selectedProject.detailedDescription.solution}
                        </p>
                      </div>
                      {selectedProject.detailedDescription.images[2] && (
                        <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-solarized-base2/50">
                          <img
                            src={selectedProject.detailedDescription.images[2]}
                            alt={`${selectedProject.title} solution`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* Results Section */}
                    <div className="bg-solarized-base2/30 rounded-lg p-8">
                      <h4 className="text-xl font-bold text-solarized-blue font-mono mb-4">
                        Результаты
                      </h4>
                      <p className="text-solarized-base1 leading-relaxed">
                        {selectedProject.detailedDescription.results}
                      </p>
                    </div>

                    {/* Image Gallery */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
