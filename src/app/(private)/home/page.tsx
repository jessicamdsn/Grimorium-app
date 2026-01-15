import Card from "@/src/components/shared/Card";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Esta é a Home</h1>
      <p className=" mt-2">
      </p>
      <Card titulo= "Titulo">
        <p>Conteúdo do cartão</p>
      </Card>
    </div>
  );
}
