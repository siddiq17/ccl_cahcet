import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { libraryData } from "@/data/library-data"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function EResourcesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">E-Resources</h1>
        <p className="text-muted-foreground">Access digital resources and databases available through our library</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>DELNET</CardTitle>
            <CardDescription>Developing Library Network</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              {libraryData.eResources.delnet.description}
              IP Range: {libraryData.eResources.delnet.ipRange}
            </p>
            <div className="flex items-center gap-4">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Access DELNET
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>N-LIST</CardTitle>
            <CardDescription>
              National Library and Information Services Infrastructure for Scholarly Content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              {libraryData.eResources.nlist.description} IP Range:{" "}
              {libraryData.eResources.nlist.ipRange}
            </p>
            <div className="flex items-center gap-4">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Access N-LIST
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>E-Consortium (AUERC)</CardTitle>
            <CardDescription>
              Anna University E-Resources Consortium
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              {libraryData.eResources.consortium.description} IP Range:{" "}
              {libraryData.eResources.consortium.ipRange}
            </p>
            <div className="flex items-center gap-4">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Access E-Consortium
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

