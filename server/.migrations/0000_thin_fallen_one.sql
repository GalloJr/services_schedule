CREATE TABLE IF NOT EXISTS "schedules" (
	"id" text PRIMARY KEY NOT NULL,
	"owner" text NOT NULL,
	"vehicle" text NOT NULL,
	"telphone" text NOT NULL,
	"description" text NOT NULL,
	"date" timestamp with time zone DEFAULT now() NOT NULL,
	"time" time NOT NULL
);
