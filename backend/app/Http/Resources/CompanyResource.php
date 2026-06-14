<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'media' => $this->media,
            'priority' => $this->priority,
            'status' => $this->status,
            'jobUrl' => $this->job_url, 
            'appliedDate' => $this->applied_date,
            'memo' => $this->memo,
        ];
    }
}
