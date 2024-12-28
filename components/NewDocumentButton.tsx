"use client";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";

function NewDocumentButton() {
  const [isPending, startTranstition] = useTransition();
  const router = useRouter();

  function handleCreateNewDocumnetButton() {
    startTranstition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  }
  return (
    <Button onClick={handleCreateNewDocumnetButton} disabled={isPending}>
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
}
export default NewDocumentButton;
