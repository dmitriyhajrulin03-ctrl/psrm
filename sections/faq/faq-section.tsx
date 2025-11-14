import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "Как начать обучение?",
    answer: "Просто зарегистрируйтесь на платформе, выберите интересующий курс и начните обучение в удобное для вас время.",
  },
  {
    question: "Можно ли получить сертификат?",
    answer: "Да, после успешного завершения курса вы получите официальный сертификат, который можно добавить в резюме.",
  },
  {
    question: "Есть ли ограничения по времени?",
    answer: "Нет, вы можете изучать материалы в своем темпе. Доступ к курсам остается активным на протяжении всего периода подписки.",
  },
];

export function FAQSection() {
  return (
    <section className="py-fluid-lg">
      <div className="container mx-auto max-w-screen-2xl px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        <h2 className="font-bold mb-fluid-xl">Часто задаваемые вопросы</h2>
        <div className="max-w-3xl space-fluid-md">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-fluid-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-fluid-sm">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

