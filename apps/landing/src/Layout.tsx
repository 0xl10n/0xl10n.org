// TODO model after nestjs layout
export const ProjectLayout = ({ children }: { children: any }) => {

    return <div className="container mx-auto min-h-[80vh]">{children}</div>
};


export const TranslateLayout = ({ children }: { children: any }) => {

    return <div className="w-full min-h-[80vh]">{children}</div>
};
