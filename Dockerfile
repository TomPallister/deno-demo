FROM hayd/alpine-deno:0.38.0

EXPOSE 1993

WORKDIR /app

USER deno

COPY deps.ts .
RUN deno fetch deps.ts

ADD . .
RUN deno fetch mod.ts

RUN deno test

CMD ["run", "--allow-net", "mod.ts"]