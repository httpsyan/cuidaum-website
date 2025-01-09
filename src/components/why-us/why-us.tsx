import { FaUsers } from "react-icons/fa";

export const WhyUs = () => {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-xl text-[#415EFF] mb-4">Por que nós?</h2>
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#0D2056] text-center text-balance leading-tight mb-20">
          Com soluções inovadoras e personalizadas, oferecemos total suporte e
          cuidado para sua saúde.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-0 items-center justify-between text-center ">
        <article className="flex flex-col items-center space-y-6">
          <div
            className="bg-[#D5DDFC] rounded-[10px] p-6 flex items-center justify-center"
            aria-hidden="true"
          >
            <FaUsers color="#1C44F2" size={24} />
          </div>

          <h3 className="text-black text-xl font-semibold">Gestão completa</h3>
          <p className="text-[#72727B] text-base max-w-xs">
            Monitore sua saúde com ferramentas que incluem planos
            personalizados, alertas e relatórios detalhados.
          </p>
        </article>

        <article className="flex flex-col items-center space-y-6">
          <div
            className="bg-[#D5DDFC] rounded-[10px] p-6 flex items-center justify-center"
            aria-hidden="true"
          >
            <FaUsers color="#1C44F2" size={24} />
          </div>

          <h3 className="text-black text-xl font-semibold">
            Comunicação Assertiva
          </h3>
          <p className="text-[#72727B] text-base max-w-xs">
            Interação direta com profissionais de saúde para ajustes nas rotinas
            e feedback contínuo.
          </p>
        </article>

        <article className="flex flex-col items-center space-y-6">
          <div
            className="bg-[#D5DDFC] rounded-[10px] p-6 flex items-center justify-center"
            aria-hidden="true"
          >
            <FaUsers color="#1C44F2" size={24} />
          </div>

          <h3 className="text-black text-xl font-semibold">
            Equipe Especializada
          </h3>
          <p className="text-[#72727B] text-base max-w-xs">
            Conte com médicos, fisioterapeutas, nutricionistas e outros
            especialistas para um cuidado multidisciplinar.
          </p>
        </article>
      </div>
    </section>
  );
};
